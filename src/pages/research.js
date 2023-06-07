import React, { useState, useEffect } from "react";
import Head from "next/head";
import fs from 'fs'
import Markdown from "markdown-to-jsx";
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'

import Footer from "../components/Footer";
import Nav from "../components/Nav";

import favicon from "../images/logojohndoe.png";

export default function Research({
    content,
  }) {
  return (
    <div className="flex flex-col dark:bg-gray-900">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href={favicon} />
      </Head>

      <div className="flex flex-col dark:bg-gray-900">
        <Nav />
        <div className="card card-page flex items-center justify-center">
            <article className="prose dark:prose-dark">
                <Markdown>{content}</Markdown>
            </article>
        </div>
      </div>
    </div>
  );
}

// export async function getStaticPaths() {
//     const files = fs.readdirSync(path.join('posts'))
  
//     const paths = files.map((filename) => ({
//       params: {
//         slug: filename.replace('.md', ''),
//       },
//     }))
  
//     return {
//       paths,
//       fallback: false,
//     }
//   }
  
  export async function getStaticProps() {
    const markdownWithMeta = fs.readFileSync(
      path.join('src/markdown/research.md'),
      'utf-8'
    )
    const { data: frontmatter, content } = matter(markdownWithMeta);
    return {
        props: {
            content,
        },
    };
  }
