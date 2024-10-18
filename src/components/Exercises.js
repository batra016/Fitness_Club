import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Exercisecard from './Exercisecard';
import Pagination from '@mui/material/Pagination';
import { exerciseOptions, FetchData } from '../utils/FetchData';

const Exercises = ({ exercise, setExercise, bodyPart }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [exercisesPerPage] = useState(9);

    useEffect(() => {
        const fetchExercisesData = async () => {
            let exerciseData = [];
            if (bodyPart === 'all') {
                exerciseData = await FetchData
                    ('https://exercisedb.p.rapidapi.com/exercises?limit=1000&offset=0', exerciseOptions);
            }
            else{
                console.log(bodyPart);
                exerciseData = await FetchData
                    (`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=1000&offset=0`, exerciseOptions);
            }
            setExercise(exerciseData);
        }
        fetchExercisesData();

    }, [bodyPart]);


    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercise.slice(indexOfFirstExercise, indexOfLastExercise);


    const paginate = (event, value) => {
        setCurrentPage(value);

        window.scrollTo({ top: 1800, behavior: 'smooth' });
    };
    return (
        <div>
            <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="10px" p="20px">
                <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '30px', xs: '20px' } }} mb="46px">Showing Results</Typography>
                <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
                    {currentExercises.map((exer, index) => (
                        <Exercisecard key={index} exercise={exer} />
                    ))}
                </Stack>

                <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
                    {exercise.length > 9 && (
                        <Pagination
                            color="standard"
                            shape="rounded"
                            defaultPage={1}
                            count={Math.ceil(exercise.length / exercisesPerPage)}
                            page={currentPage}
                            onChange={paginate}
                            size="large"
                        />
                    )}
                </Stack>
            </Box>
        </div>
    );
};

export default Exercises;
