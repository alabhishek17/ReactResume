import Account from "../../../public/account.svg"
import Tap from "../../../public/tap.svg"
import Busines from "../../../public/business.svg"
import Git from "../../../public/github.svg"
import Linkedin from "../../../public/linkedin.svg"
import twitter from "../../../public/twitter.svg"
import style from "./css_ind.module.css"
function Index() {
    return (
        <div>
            
            <section className={style.main}>
                <div> <img style={{ width: "90px" }} src={Account} alt="" />
                    <h3>Profile</h3>
                </div>

                <div>
                    <h2>ABHISHEK A L</h2>
                    <p>FREELANCE WRITER</p>
                </div>
                <div>
                    <p>I specialize in writing long-form blog content.case studies,e-books,and <br /> white papers for B28s tech startups, and marketing agencies</p>
                    <span>Email:  abh@gmail.com</span>
                    <span>Website:  abc.com</span>
                </div>
            </section>
            <hr />
            <section className={style.main}>
                <div> <img style={{ width: "90px", marginTop: "100px" }} src={Busines} alt="" />
                    <h3>WORK</h3>
                </div>

                <div >
                    <h4>Present</h4>
                    <h5>Jessica Greene Marketing.Freelance Writer</h5>
                    <p>Creat blog posts,landing pages,e-books,and case studies for client</p>
                    <h4>2016</h4>
                    <h5>Kaiser Permanente.Lead Agile Product Owner</h5>
                    <p>Creat and socialized best parctices for Agile software developement</p>
                    <h4>2013-2015</h4>
                    <h5>Humana.Agile Product Owner</h5>
                    <p>Oversaw the implementation of six major web developement projects</p>
                </div>
            </section>
            <hr />
            <section className={style.main3}>
                <div> <img style={{ width: "90px" }} src={Tap} alt="" />
                    <h3>Skills</h3>
                </div>

                <div>
                    <h5>Writing:*****</h5>
                    <h5>Editing:****</h5>
                    <h5>Social Media:***</h5>
                    <h5>Rearching:*****</h5>
                    <h5>SED:****</h5>

                </div>
                <div>
                    <span>Zapier: Organize Your Life with the Agile Method</span> <br /> <br />
                    <span> Spoke:is 40 hours a week too much? here's what history and science say</span> <br /> <br />
                    <span>nDash why Generalist writers Lead to Lost Profit in B2B Tech</span>
                </div>
            </section>
            <hr />
            <section className={style.img}>
                <img style={{ width: "90px" }} src={Git} alt="" />
                <img style={{ width: "90px" }} src={Linkedin} alt="" />
                <img style={{ width: "90px" }} src={twitter} alt="" />
            </section>
        </div>
    )
}
export default Index;