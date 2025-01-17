import { MetaFunction } from "@remix-run/node";

import { Anchor } from "~/components/Anchor";
import { BodyText } from "~/components/BodyText";
import { Heading } from "~/components/Heading";
import { Layout } from "~/components/Layout";
import { createMeta, site } from "~/config";

const tagline = `We meet once every month or two to chat about our favorite typed superset of JavaScript.`;

export const meta: MetaFunction = () => createMeta({ page: "About", tagline });

export default function About() {
	return (
		<Layout back title="About">
			<Heading level={2}>{site.description}</Heading>
			<BodyText>{tagline}</BodyText>
			<BodyText>
				We welcome all developers of all experience and skill levels to connect,
				learn new things, and show off their work.
			</BodyText>
			<BodyText>We're happy for you to join us.</BodyText>
			<Heading level={3}>The Team</Heading>
			<ul>
				<li>
					<strong>Josh Goldberg</strong>
				</li>
				<li>
					<strong>David Blass</strong>
				</li>
			</ul>
			<Heading level={4}>Contact Us</Heading>
			<BodyText>
				Reach us over{" "}
				<Anchor
					target="_blank"
					to="mailto:contact@bostonts.club"
					variant="underline"
				>
					email
				</Anchor>{" "}
				or the{" "}
				<Anchor
					target="_blank"
					to="https://join.slack.com/t/bostonjavascript/shared_invite/zt-2emlu1b7m-6Ys9wprf~xY65GGOAioJrA"
					variant="underline"
				>
					Boston JavaScript Slack
				</Anchor>
				.
			</BodyText>
			<Heading level={3}>The Website</Heading>
			<BodyText>
				Built with React, Remix, TypeScript, Vanilla Extract, and Vite.
			</BodyText>
		</Layout>
	);
}
