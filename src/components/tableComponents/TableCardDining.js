import React from 'react';
import './tableAssets/TableCard.scss'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import {connect} from "react-redux";
import {status1, status2} from "./constants/TableConstanta";

const useStyles = makeStyles(theme => ({
    card: {
        width: '20%',
        height: '15%',
        margin: 10,
    },
    media: {
        display: 'inline-block',
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: red[500],
    }
}));

function TableCardDining(props) {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <div className="card border-left-warning shadow h-100 py-2">

                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            {props.dataTables.numberTable}
                        </Avatar>
                    }
                    title={props.dataTables.status}
                />

                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p" onChange>
                        <b>Capacity : {props.dataTables.capacity}</b>
                    </Typography>
                </CardContent>
            </div>
        </Card>

    );
}

export default connect()(TableCardDining)
