import { Filter } from 'components/Filter/Filter';
import AddingForm from 'components/AddingForm/AddingForm';
import { ContactList } from 'components/ContactList/ContactList';
import { RiContactsBookLine } from 'react-icons/ri';
import {
  ContactsSection,
  Container,
  SearchSection,
  Section,
  TitleWrapper,
} from './PhoneBook.styled';

const PhoneBook = () => {
  return (
    <Section>
      <TitleWrapper>
        <h1>Phonebook</h1> <RiContactsBookLine size={40} color="#fff" />
      </TitleWrapper>
      <SearchSection>
        <Container>
          <Filter />
          <AddingForm />/
        </Container>
        <ContactsSection>
          <h2>Contacts</h2>
          <ContactList />
        </ContactsSection>
      </SearchSection>
    </Section>
  );
};

export default PhoneBook;
