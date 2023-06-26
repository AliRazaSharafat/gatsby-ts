import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";
import Layout from "../layout";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div>
      <Layout>
        <div>Welcome to Gatsby</div>
        See our dynamic page <Link></Link>
      </Layout>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
