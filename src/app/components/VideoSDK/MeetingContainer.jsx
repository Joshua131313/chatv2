import { useMeeting } from '@videosdk.live/react-sdk';
import React, {useState} from 'react'
import { Controls } from './Controls';
import { VideoComponent } from './VideoComponent';
export const MeetingContainer = (props) => {
    const [joined, setJoined] = useState(false);
    const { join } = useMeeting();
    const { participants } = useMeeting();
    const joinMeeting = () => {
      setJoined(true);
      join();
    };
    console.log(participants);
    return (
      <div className="container">
        <h3>Meeting Id: {props.meetingId}</h3>
        {joined ? (
          <div>
            <Controls />
            {[...participants.keys()].map((participantId) => (
              <VideoComponent participantId={participantId} />
            ))}
          </div>
        ) : (
          <button onClick={()=> joinMeeting()}>Join</button>
        )}
      </div>
    );
  }