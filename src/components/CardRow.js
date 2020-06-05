import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AiOutlinePlusSquare } from 'react-icons/ai'

//MUI Imports
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    cardRoot: {
        minWidth: 200,
        flexGrow: 1,
        margin: '15px',
        height:'180px'
    },
    cardApply: {
        minWidth: 200,
        flexGrow: 1,
        margin: '15px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'nowrap',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 2,
    },
});

const CardRow = () => {
    const classes = useStyles();

    return (
        <>
            <Card className={classes.cardRoot}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Savings Account
        </Typography>
                    <Typography variant="h5" component="h2">
                        $ 1,657.12
        </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Available balance
        </Typography>
                    <Typography variant="body2" component="p">
                        11-3186-05583943-00
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
            <Card className={classes.cardRoot}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Checking Account
        </Typography>
                    <Typography variant="h5" component="h2">
                        $ 23,758.23
        </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Available balance
        </Typography>
                    <Typography variant="body2" component="p">
                        11-3186-05583943-00
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
            <Card className={classes.cardRoot}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Visa
        </Typography>
                    <Typography variant="h5" component="h2">
                        $ 675.23
        </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        4564-9172-4752-7703
        </Typography>
                    <Typography variant="body2" component="p">
                        Available balance
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
            <Card className={classes.cardApply}>
                <CardContent style={{ display: 'flex' }} >
                    <AiOutlinePlusSquare size={30} />
                    <Typography style={{lineHeight: 2.2}}variant="body2" component="p">
                        Apply for a new account
                    </Typography>
                </CardContent>
            </Card>
        </>

    );
}
export default CardRow;