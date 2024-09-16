
import './webinar.css'
function Webinar() {
  return (
    <main className='pt-5'>
        <div className="container">
    <h1 className="webinars-heading">Webinars</h1>
    <p className="webinars-description">
        We offer various revision webinars, including:
    </p>
    <ul className="webinar-list">
        <li>ECG Masterclass</li>
        <li>Hardest Question Webinar</li>
        <li>Last Minute Revision</li>
        <li>Neuroanatomy and Stroke Localisation</li>
        <li>Obstetrics & Gynaecology Essentials</li>
        <li>Babies in PLAB</li>
        <li>Children in PLAB</li>
        <li>SEEDS [Stems Explained Explored Discussed Socially]</li>
    </ul>
    <p className="webinars-footer">
        Each webinar costs £25. Please check back soon for more upcoming webinar dates!
    </p>
</div>

    </main>
  )
}

export default Webinar