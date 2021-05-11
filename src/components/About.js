import './About.scss';
import Photo from '../profile-photo.png';
import efficency from '../draws/services-il/efficency.svg';
import design from '../draws/services-il/great-desing.svg';
import responsive from '../draws/services-il/responsive.svg';
import sparkles from '../draws/Sparkles.svg'
import sparkles1 from '../draws/Sparkles-1.svg'

export default function About() {
    return(
        <section  id ="about" className="about">
            <div className="container-about">
                <div className="info-content">
                <div className="profile-pic-text">
                         <h2>ABOUT ME!</h2>
                    <img src={Photo} alt="profile-photo"/>
                </div>
                <div className="text-content">
                    <p>I am a front end developer jr and designer, I am an enthusiast of new technologies, I like to be constantly learning and my purpose is to be a senior developer, create and create.</p>
                    <p>I am good at learning fast, I have skill for layout, interface creation, general management of the DOM and interaction with the client, consumption of API's.</p>
                </div>
                </div>
                <div className="services">
                    <img src={sparkles} className="sparkles spark-up" alt="sparkles"/>
                    <div className="service box1">
                        <img src={design} alt="design"/>
                        <h3>Personalized design</h3>
                    </div>
                    <div className="service box2">
                        <img src={responsive} alt="responsive"/>
                        <h3>Responsive design for all devices</h3>
                    </div>
                    <div className="service box3">
                        <img src={efficency} alt="Efficency"/>
                        <h3>Efficient operation</h3>
                    </div>
                    <img src={sparkles1} className="sparkles spark-down" alt="sparkles"/>
                </div>
            </div>
        </section>
    )
}