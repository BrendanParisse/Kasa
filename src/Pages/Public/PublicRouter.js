import { Routes, Route, Navigate } from 'react-router-dom';

import { Home, Apropos, Logement, Not404 } from '@/Pages/Public/Index.js';

import Layout from '@/Layouts/Layouts.js';

const PublicRouter = () => {

    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="Kasa" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/apropos" element={<Apropos />} />
                <Route path="/logement/:id" element={<Logement />} />
                <Route path="*" element={<Not404 />} />
            </Route>

        </Routes>
    );

};

export default PublicRouter;