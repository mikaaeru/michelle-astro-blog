---
title: "Privacy Policy: Encrypted DNS Profiles"
description: "How your network data is managed when using our Cloudflare Zero Trust DNS profiles."
pubDate: "Mar 25 2026"
author: "Michelle"
heroImage: "/apple.jpg"

---

## Introduction and Infrastructure

This privacy policy explains how your network data is managed when you install and use the provided Encrypted DNS over HTTPS profiles. By using these configuration files, your device routes its Domain Name System queries exclusively through the Cloudflare Zero Trust Gateway infrastructure. This document clarifies the data processing practices of Cloudflare and defines the exact data visibility granted to the service administrator.

---

## Cloudflare Zero Trust Gateway Processing

When you browse the internet or use applications with these profiles active, your device sends DNS queries to Cloudflare servers. According to the official Cloudflare Zero Trust privacy policy, Cloudflare processes this traffic to apply the security and filtering rules configured for each profile. This includes blocking advertisements, preventing the resolution of telemetry trackers, and stopping connections to specific Apple servers to facilitate application sideloading. During this routing process, Cloudflare logs metadata about the network requests. The collected data includes the requested domain names, connection timestamps, the protocol used, and whether the gateway allowed or blocked the connection. Cloudflare utilizes this metadata to enforce the filtering rules at the network edge and ensure the reliability of the routing infrastructure.

---

## Cloudflare Privacy and Retention Practices

Cloudflare operates as the primary data processor for your DNS traffic. Their privacy policy confirms that they do not sell user data or utilize it for unauthorized advertising purposes. The raw query logs and network metadata are stored temporarily in their data centers to provide security analytics and system diagnostics. Cloudflare employs comprehensive encryption protocols to secure the data both in transit and at rest. For exact log retention timeframes and compliance documentation, users should consult the Cloudflare global privacy policy. 

---

## Administrator Visibility and Anonymized Data

The service administrator, Michelle, manages the Cloudflare Zero Trust account to keep the DNS filtering lists updated and functional. To protect user privacy, strict data obfuscation settings are enforced within the Cloudflare dashboard. Michelle only has access to fully anonymized DNS queries and aggregate network statistics. Your personal IP address, device identifiers, and personally identifiable information are never visible to the administrator. The available anonymized data is used strictly for statistical analysis and debugging purposes. Reviewing these anonymous logs allows the administrator to identify network errors, fix false-positive domain blocks, and ensure the sideloading profiles function correctly. 

---

## Bug Reporting and Technical Support

Users who experience network interruptions, app installation failures, or incorrectly blocked domains should submit a bug report. You can report bugs by sending an email directly to sel@kamikami.eu. Alternatively, you can message Michelle on the WSF Discord server for technical support. When reporting an issue, providing the approximate time of the error and the affected application helps expedite the debugging process.