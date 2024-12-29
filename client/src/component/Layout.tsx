import { Header } from './Header';
import { Footer } from './Footer';
import Breadcrumb from './Breadcrumb';

type LayoutProps = {
  children: React.ReactNode;
  breadcrumbItems?: {
    label: string;
    href?: string;
    isCurrent?: boolean;
  }[];
};

const Layout = ({ children, breadcrumbItems }: LayoutProps) => (
  <div className="min-h-screen flex flex-col bg-gray-50">
    <Header />

    <main className="flex-grow container mx-auto px-4 py-8">
      {breadcrumbItems && (
        <div className="mb-6">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      )}
      {children}
    </main>

    <Footer />
  </div>
);

export default Layout;
