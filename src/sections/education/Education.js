import React from 'react';
import {Grid} from '@material-ui/core';
import './Education.css';

function Education() {
    return (
        <div className={'container--education'}>
            <Grid container className={'education--description'}>
                <Grid md={12} item className={'education--heading'}>
                    <h2>Experience</h2>
                    <p className={"short--title"}>Masters degree</p>
                </Grid>

                <Grid md={12} item className={'heading--2'}>
                    <h3>Education</h3>
                </Grid>

                <Grid md={12} item className={'heading--2'}>
                    <h3>Career</h3>
                </Grid>
            </Grid>
        </div>

    );
}

export default Education;
