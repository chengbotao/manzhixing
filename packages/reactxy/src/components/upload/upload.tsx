/*
 * @Author: Chengbotao
 * @Date: 2023-02-15 11:54:23
 */
/**
action
beforeUpload
onProgress
onChange
onSuccess
onError
onRemoved
slot
test mock server: JSONPlaceholder Mocky
 */
import React, { FC } from 'react';
import classNames from 'classnames';
import axios from 'axios';

export type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error';

export interface UploadFile {
  uid: string;
  size: number;
  name: string;
  status?: UploadFileStatus;
  percent?: number;
  raw?: File;
  response?: any;
  error?: any;
}

export interface UploadProps {
  action: string;
  beforeUpload?: (file: File) => boolean | Promise<File>;
  onProgress?: (percentage: number, file: UploadFile) => void;
  onSuccess?: (data: any, file: UploadFile) => void;
  onError?: (err: any, file: UploadFile) => void;
  // onChange
  // onRemoved
  className?: string;
}

export const Upload: FC<UploadProps> = (props) => {
  const { className, action, beforeUpload, onProgress, onSuccess, onError } = props;
  const classes = classNames('xy-upload-wrapper', className);
  return <div className={classes}></div>;
};

export default Upload;
