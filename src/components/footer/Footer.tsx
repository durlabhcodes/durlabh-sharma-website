import "./Footer.css"

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                A <span className="footer-content__fancy">fancy</span> footer will appear right here
            </div>
            <div className="footer-content__small">
                <span className="footer-content__fancy__small">Fancy</span> footer here
            </div>
        </footer>
    )
}