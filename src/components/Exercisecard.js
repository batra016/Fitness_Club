import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const Exercisecard = ({ exercise }) => {
    console.log(exercise);
    return (
        <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
            <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" style={{ filter: 'brightness(0.95) contrast(1.2)', backgroundColor: 'transparent' }} />
            <Stack direction="row">
                <Button sx={{ ml: '21px', color: '#fff', background: '#FFA9A9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}
                    onClick={() => { }}>
                    {exercise.bodyPart}
                </Button>
                <Button sx={{ ml: '21px', color: '#fff', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}
                    onClick={() => { }}>
                    {exercise.target}
                </Button>
            </Stack>
            <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
                {exercise.name}
            </Typography>
        </Link>
    )
}

export default Exercisecard
