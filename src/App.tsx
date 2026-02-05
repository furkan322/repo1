import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { FAQPage } from './pages/FAQPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hizmet/:id" element={<ServiceDetailPage />} />
            <Route path="/blog/:id" element={<BlogDetailPage />} />
            <Route path="/sss" element={<FAQPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
