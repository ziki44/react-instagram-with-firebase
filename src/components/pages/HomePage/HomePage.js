import { useState, useEffect } from 'react';

import Header from 'components/sections/Header/Header';
import MessagesList from 'components/sections/MessagesList/MessagesList';
import WelcomeMessage from 'components/sections/WelcomeMessage/WelcomeMessage';

import {
  removeMessage,
  getMessages
} from 'helpers/http';
import Footer from 'components/sections/Footer/Footer';

function HomePage() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessages()
      .then(data => {
        setMessages(data);
      })
  }, [])

  const handleMessageRemove = (id) => {
    const filteredMessage = messages.filter(message => {
      return message.id !== id
    })

    removeMessage(id)
    setMessages(filteredMessage)
  }

  return (
    <div>
      <Header logo="Instagram App"/>
      <WelcomeMessage>
        <p>Messages List</p>
      </WelcomeMessage>
      <MessagesList
        messages={messages}
        handleMessageRemove={handleMessageRemove}
      />
      <Footer />
    </div>
  );
}

export default HomePage;