import './WelcomeMessage.css';

function WelcomeMessage(props) {
  return (
    <div className="welcome-message">
      {props.children}
    </div>
  )
}

export default WelcomeMessage