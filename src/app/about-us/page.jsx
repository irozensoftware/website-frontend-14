
import AboutUs from '@/components/about-us/AboutUs';
export async function generateMetadata() {
  return {
    title: "About Us",
    description:"Learn more about us",
  };
}

const AboutPage = () => {
  return <AboutUs />;
};

export default AboutPage;
