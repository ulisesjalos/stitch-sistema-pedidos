import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CatalogPage from './pages/CatalogPage';
import InvoiceTool from './pages/InvoiceTool';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/invoice" element={<InvoiceTool />} />
      </Routes>
    </>
  );
}
