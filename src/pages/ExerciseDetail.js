import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { exerciseOptions, FetchData, youtubeOptions } from '../utils/FetchData';
import Detail from '../components/Detail';

import ExerciseVideos from '../components/ExerciseVideos';


const ExerciseDetail = () => {
  const[exerciseDetail , setexerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const {id} = useParams();

  useEffect(() =>{
     const fetchExercisedData = async() =>{
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      console.log(id);

      const exerciseDetailData = await FetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setexerciseDetail(exerciseDetailData);

      const exerciseVideosData = await FetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await FetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      console.log(exerciseDetailData.target);
      setTargetMuscleExercises(targetMuscleExercisesData);
     

     }
     fetchExercisedData();
  },[id]);
  console.log("printing detail");
  console.log(exerciseDetail);
  console.log(targetMuscleExercises);
  
  return (
    <Box>
      <Detail exerciseDetail = {exerciseDetail}></Detail>
      <ExerciseVideos exerciseVideos = {exerciseVideos} name={exerciseDetail.name}></ExerciseVideos>

      
    </Box>
  )
}

export default ExerciseDetail
