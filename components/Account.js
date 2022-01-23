import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'
import Avatar from './Avatar'
import Nav from './Nav'
import { loadGoogleScript } from '../utils/loadGoogleScript';
const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const googleKey = process.env.REACT_APP_GOOGLE_API_KEY;


export default function Account({ session }) {
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [website, setWebsite] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)

  useEffect(() => {
    getProfile()
  }, [session])

  useEffect(()=>{
    window.onGoogleScriptLoad = () => {
      gapi.load('client', initClient);
    }
    loadGoogleScript();
    //gapi.load('client:auth2', initClient);
  },[])

  function initClient() {

    gapi.client.setToken({
      access_token: session.provider_token
    });


    gapi.client.init({
      'apiKey': 'AIzaSyCKB0R5CBjYBW9QqhJx-N-RLLopOEzPUZY',
      'clientId': '545180529239-s5ucf3trbdd3k0tmesdb7q73uheb3h3j.apps.googleusercontent.com',
      'discoveryDocs': ['https://people.googleapis.com/$discovery/rest'],
      'scope': 'profile',
    }).then(function () {
      // Listen for sign-in state changes.
      console.log(gapi.auth2.getAuthInstance().isSignedIn.get());
      console.log(session);
      // gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
      // console.log(gapi.auth2.getAuthInstance());
      // // Handle the initial sign-in state.
      // updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());

      return gapi.client.people.people.get({
        'resourceName': 'people/me',
        'requestMask.includeField': 'person.names'
      });

      // return gapi.client.setToken({access_token: session.access_token})

    }).then(function(response){
      //console.log(response.result);
      console.log(response);
    }, function(error) {
      console.log(error);
      //appendPre(JSON.stringify(error, null, 2));
    });
  }

  

  async function getProfile() {
    try {
      setLoading(true)
      const user = supabase.auth.user()

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUsername(data.username)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile({ username, website, avatar_url }) {
    try {
      setLoading(true)
      const user = supabase.auth.user()

      const updates = {
        id: user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date(),
      }

      let { error } = await supabase.from('profiles').upsert(updates, {
        returning: 'minimal', // Don't return the value after inserting
      })

      if (error) {
        throw error
      }
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
     <Nav username={username}/>
      <div className="form-widget">
         <div style={{marginTop:"15px"}}>
          <Avatar
            url={avatar_url}
            size={150}
            onUpload={(url) => {
                setAvatarUrl(url)
                updateProfile({ username, website, avatar_url: url })
            }}
            />
         </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="text" value={session.user.email} disabled />
        </div>
        <div>
          <label htmlFor="username">Name</label>
          <input
            id="username"
            type="text"
            value={username || ''}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="website">Website</label>
          <input
            id="website"
            type="website"
            value={website || ''}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>

        <div>
          <button
            className="button block primary"
            onClick={() => updateProfile({ username, website, avatar_url })}
            disabled={loading}
          >
            {loading ? 'Loading ...' : 'Update'}
          </button>
        </div>

        <div>
          <button className="button block" onClick={() => supabase.auth.signOut()}>
            Sign Out
          </button>
        </div>
      </div>
    </>
  )
}
