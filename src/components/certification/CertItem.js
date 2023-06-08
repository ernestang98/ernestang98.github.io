import React from "react";
import Image from "next/image";
import Link from "next/link";

function CertItem({
  id,
  name,
  badge,
  url,
}) {
  return (
    <div className="flex max-w-lg flex-col-reverse rounded-xl border-[1px] border-tertiary bg-secondary/50 py-4 px-6 transition duration-200 hover:border-accent mr-20">
      <Link href={url} noExternalLinkIcon noGradientUnderline target="_blank" rel="noopener noreferrer">
        <div className="mt-8 flex-col space-y-4">
          <h2 className="text-xs font-semibold transition duration-200 hover:opacity-60 text-center text-custom-dark">
            {name}
          </h2>
        </div>
      </Link>
      <Link
        href={url}
        className="aspect-[16/9] rounded-2xl drop-shadow-md"
        noExternalLinkIcon
        noGradientUnderline
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <Image
            src={badge}
            className="rounded-lg transition duration-200 hover:opacity-60"
            height={300}
            width={300}
          />
        </div>
      </Link>
    </div>
  );
}

export default CertItem;
