import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions, FetchData } from '../utils/FetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercise, bodyPart, setBodyPart }) => {
    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([]);

    //execiseoptions are just the headers to get the data

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await FetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
            console.log(bodyPartsData);
            setBodyParts(['all', ...bodyPartsData]);
        };

        fetchExercisesData();
    }, []);

    const handleSearch = async () => {
        if (search) {
            const exercisedata = await FetchData
                ('https://exercisedb.p.rapidapi.com/exercises?limit=1000&offset=0', exerciseOptions);

            const SearchedExercise = exercisedata.filter((exercise) =>
                exercise.name.toLowerCase().includes(search) ||
                exercise.bodyPart.toLowerCase().includes(search) ||
                exercise.equipment.toLowerCase().includes(search) ||
                exercise.target.toLowerCase().includes(search)
            )

            console.log(exercisedata);

            setSearch('');
            setExercise(SearchedExercise);
            window.scrollTo({ top: 1800, behavior: 'smooth' });
        }

    }
    return (
        <Stack alignItems="center" mt="37px" justifyContent="center" p="40px">
            <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
                Awesome Exercises You <br /> Should Know
            </Typography>

            <Box position="relative" mb="72px">

                <TextField
                    height="76px"
                    sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder="Search Exercises"
                    type="text"
                >

                </TextField>
                <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} onClick={handleSearch} >
                    Search
                </Button>
            </Box>
            <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
                <HorizontalScrollbar data={bodyParts} setBodyPart={setBodyPart} bodyPart={bodyPart} />
            </Box>


        </Stack>
    )
}

export default SearchExercises
