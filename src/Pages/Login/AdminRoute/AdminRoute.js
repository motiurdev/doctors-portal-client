import { CircularProgress } from '@mui/material';
import React from 'react';
import {
    useLocation,
    Navigate
} from 'react-router';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useAuth()
    const location = useLocation()
    if (isLoading) { return <CircularProgress></CircularProgress> }
    if (user.email && admin) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
};

export default AdminRoute;