import './HomeVideo.css';
import videoHome from './homevid.mp4';

export default function HomeVideo() {
  return (
    <section className='section--homevideo'>
      <video
        className='home--video'
        src={videoHome}
        autoPlay
        muted
        loop
        poster='https://images.unsplash.com/photo-1568562764054-8783070ce2f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
      ></video>
    </section>
  );
}
