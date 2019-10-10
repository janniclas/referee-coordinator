import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ObjectTypes } from '../types/types';
import { ObjectAction, addObject } from '../store/objectActions';
import { Referee, Level, REF } from '../types/referee';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    button: {
      margin: theme.spacing(1),
    },
  }),
);

interface ObjFormProps<T extends ObjectTypes> {
  saveObj: (obj: T) => ObjectAction<T>
}

const mapDispatchToProps = <T extends ObjectTypes>(dispatch: Dispatch) => {
  return {
    saveObj: (obj: T) => dispatch(addObject<T>(obj))
  }
}

const emptyObj: ObjectTypes = {
  id: 'tmp',
  name: '',
  level: Level.R1,
  type: REF
};

const myWrapper = (WrappedComponent: () => JSX.Element) => {
    const ObjectForm = (props: ObjFormProps<ObjectTypes>) => {
        console.log('my props', props);
        const classes = useStyles();

        const [obj, setObj] = React.useState<ObjectTypes>(
            emptyObj
        );

        const handleNameChange = (newName: string) => {
            setObj(Object.assign({...obj}, {name: newName}));
        }

        const handleLevelChange = (newLevel: Level) => {
            setObj(Object.assign({...obj}, {level: newLevel}));
        }

        const handleStateChange = (newObject: ObjectTypes) => {

        }

        const submit = () => {
            //TODO: this should be improved
            obj.id = '' + Math.random();
            props.saveObj(obj);
            setObj(emptyObj);
        }

        return (
            <form className={classes.container} noValidate autoComplete='off'>
            <WrappedComponent></WrappedComponent>    
            <Button variant="contained" className={classes.button} onClick={submit}>
                Add
            </Button>
            </form>
        );
    }
    return ObjectForm;
}


const RefereeForm = () => {
    return (
        <div>
            Hello World !
        </div>
    )
}

const WrappedRefereeForm = myWrapper(RefereeForm);

export default connect(null, mapDispatchToProps) (myWrapper(RefereeForm));