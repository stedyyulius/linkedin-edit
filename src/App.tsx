import { useEffect, useState } from 'react';
import styled from 'styled-components';

import './App.css';

import profile_background from './assets/profile-bg.jpeg';
import edit_icon from './assets/edit-icon.png';

import { setDb, getDb } from './firebase';

import { ProfileSection } from './components/ProfileSection';
import { Card } from './components/Card';
import { EditProfile } from './components/EditProfile';
import { Job } from './components/Job';
import { lightGrey } from './styles/colors';
import { EditJob } from './components/EditJob';

function App() {

  const [isEditProfileVisible, setIsEditProfileVisible] = useState(false);
  const [editedJob, setEditedJob] = useState({});

  useEffect(() => {
    // getDb()
  }, [])

  return (
    <Container>
      <EditProfile visible={isEditProfileVisible} />
      <EditJob job={editedJob} />
      <ProfileContainer>
          <ProfileBackground src={profile_background} />
          <ProfileSectionContainer>
            <ProfileSection />
          </ProfileSectionContainer>
      </ProfileContainer>
      <JobContainer>
        <Card>
          <>
            <JobHeader>
              <h4>Experience</h4>
              <h1>+</h1>
            </JobHeader>
            <Job setEdit={(job: any) => setEditedJob(job) } />
          </>
        </Card>
      </JobContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 45vw;
  margin: 80px auto;
`

const ProfileContainer = styled.div`
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 1px solid ${lightGrey};
`

const ProfileBackground = styled.img`
  min-width: 45vw;
  height: 150px;
  object-fit: cover;
  border-radius: 20px;
`

const ProfileSectionContainer = styled.div`
  position: relative;
  top: -100px;
  left: 30px;
`

const JobContainer = styled.div`
  width: 100%;
  margin-top: 30px;
`

const JobHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: space-between;
  padding: 15px;
  margin: auto;
  align-items: center;
`

const JobEditIcon = styled.img`
  width: 35px;
  height: 35px;
`

export default App;
