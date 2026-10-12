import Contact from '../components/Contact';

export default function ContactPage({ onToast }) {
  return (
    <div className="contact-page" style={{ paddingTop: '5rem' }}>
      <Contact onToast={onToast} />
    </div>
  );
}
