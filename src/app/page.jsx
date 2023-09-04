import Features from "@/components/Features/Features";
import styles from "./homepage.module.css";
import CategoryList from "@/components/CategoryList/CategoryList";
import CardList from "@/components/CardList/CardList";
import Menu from "@/components/Menu/Menu";

export default function Home() {
  return (
    <div className="container">
      <Features />
      <CategoryList />
      <div className="{styles.content}">
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
