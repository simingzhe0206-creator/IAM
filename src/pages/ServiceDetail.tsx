import { Navigate, useParams } from 'react-router-dom';
import { serviceCategories, services } from '../content/site';

export function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);
  const category = serviceCategories.find((item) => item.services.some((entry) => entry.slug === slug));

  if (!service || !category) {
    return <Navigate to="/services" replace />;
  }

  return <Navigate to={`/services/category/${category.slug}#${service.slug}`} replace />;
}
