import { useState } from "react";
import { Tweet } from "../components/Tweet";



  export function Tweets(){

    const [tweets, setTweets] = useState<string[]>([
        'Tweet 1',
        'Tweet 2',
        'Tweet 3',
        'Tweet 4',
        'Tweet 5'
      ])
    
      function createTweet(){
        setTweets([...tweets, 'Tweet 6'])
      }
      
    return (

        
        <div>
          
          {tweets.map(tweet => {
            return <Tweet text={tweet} />
          })}
    
          <button 
            onClick={createTweet}
            style={{
              backgroundColor:'purple',
              border: 6,
              padding: '6px 12px',
              color: 'whitesmoke'
            }}>Adicionar Tweet</button>
        </div>
      )
  }