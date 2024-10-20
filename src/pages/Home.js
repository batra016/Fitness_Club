import React , {useState} from 'react'
import { Box } from '@mui/material'
import Exercises from '../components/Exercises'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'


const Home = () => {
  const [exercise, setExercise] = useState([]);
  const[bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
      <HeroBanner></HeroBanner>
      <SearchExercises setExercise = {setExercise} bodyPart = {bodyPart} setBodyPart = {setBodyPart}/>
      <Exercises setExercise = {setExercise} bodyPart = {bodyPart} exercise={exercise}/>
    </Box>
  )
}

export default Home
