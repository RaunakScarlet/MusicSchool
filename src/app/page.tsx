import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "../components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import MusicSchoolTestimonialsCard from "@/components/MusicSchoolTestimonialsCard";
import UpcomingWebinars from "../components/UpComingWebinars";
import Instructors from "@/components/Instructors";

export default function Home() {
    return (
        <main>
            <HeroSection />
            <FeaturedCourses />
            <WhyChooseUs />
            <MusicSchoolTestimonialsCard />
            <UpcomingWebinars />
            <Instructors />
        </main>
    );
}
