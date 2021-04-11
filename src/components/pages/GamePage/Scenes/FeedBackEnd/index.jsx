
import DialogEnd from './DialogEnd/index'
import Personage from '../../../../personages/personage'
import "./FeedBackEnd.css";

const SceneFeedBackEnd = ({
    currentStory,
    currentQuestion,
    newQuestion
}) => {
    // const side = 'left';

    const DialogBox = () => {
        return (
            <div className="feedBackEnd-box">
                <DialogEnd 
                    Personage={()=>(<Personage name="girl"/>)}
                    currentQuestion={currentQuestion}
                    onCall={newQuestion}
                />
            </div>  
        )
    }

    const PersonageBox = () => {
        return (
            <div className="feedBackEnd-personage-container">
                <div className="feedBackEnd-personage">
                    <Personage 
                        name="girl"
                    />
                </div>
            </div>            
        )
    }

    return (
        <div className="feedBackEnd-container">
            <div className={currentStory.cover}>
                <div className="feedBackEnd-title-container">
                    <div className="feedBackEnd-title-content">
                        <div className="title-history-1"/>
                    </div>
                </div>
                <div className="feedBackEnd-content">  
                    <DialogBox /> 
                    <PersonageBox />
                </div>     
            </div>
        </div>
    )
}

export default SceneFeedBackEnd;