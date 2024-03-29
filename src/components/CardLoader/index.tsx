import ContentLoader from "react-content-loader";
import './styles.css';

const CardLoader = () => (
    <div className="card-loader-container">
        <ContentLoader 
            speed={2}
            width={450}
            height={450}
            viewBox="0 0 450 450"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            >
            <rect x="0" y="0" rx="8" ry="8" width="450" height="450" />
        </ContentLoader>
    </div>
)

export default CardLoader;