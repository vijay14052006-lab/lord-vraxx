import Identity from '../components/Identity';
import Timeline from '../components/Timeline';
import Developing from '../components/Developing';

export default function About() {
  return (
    <div className="about-page" style={{ paddingTop: '5rem' }}>
      {/* Detailed Identity & Origin Story */}
      <Identity />

      {/* Personal Chronology Timeline */}
      <Timeline />

      {/* Skills Currently Developing */}
      <Developing />
    </div>
  );
}
