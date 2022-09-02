import React from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import SimpleMDE from 'react-simplemde-editor';
import Avatar from '@mui/material/Avatar';
import { UserInfo } from '../../components/UserInfo';

import 'easymde/dist/easymde.min.css';
import styles from './Lk.module.scss';

export const Lk = () => {

  return (
    <>
    <div className={styles.div}>
      <div className={styles.avatar}>
          <Avatar sx={{ width: 100, height: 100 }} />
        </div>
      </div>
      <UserInfo />
    </>
  );
};
