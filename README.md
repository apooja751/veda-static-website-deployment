
# AWS Static Website Deployment using Amazon S3 and CloudFront

## Project Overview

This project demonstrates the deployment of a responsive static portfolio website using Amazon Web Services (AWS).

The website is hosted in Amazon S3 and distributed globally using Amazon CloudFront. CloudFront provides HTTPS security, content caching and efficient content delivery.

## Live Website

**CloudFront URL:** https://d1g412nguimmf1.cloudfront.net

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Amazon S3
- Amazon CloudFront
- AWS Certificate Manager (CloudFront-managed TLS certificate)
- Origin Access Control (OAC)
- DNS

## AWS Architecture

The website follows this deployment architecture:

User → DNS Resolution → CloudFront CDN → Private Amazon S3 Bucket

See [ARCHITECTURE.md](ARCHITECTURE.md) for the architecture diagram.

## Website Features

- Responsive portfolio design
- Home section
- About Me section
- Technical Skills section
- Featured Projects section
- Contact section
- Mobile navigation menu
- Responsive layout for mobile and desktop

## AWS Configuration

### 1. Amazon S3

- Bucket name: `veda-static-website-2026`
- AWS Region: Asia Pacific (Mumbai)
- Region code: `ap-south-1`
- Stored files:
  - index.html
  - style.css
  - script.js
- Block Public Access: Enabled
- Static Website Hosting: Disabled

### 2. Amazon CloudFront

- Distribution name: `veda-static-website`
- Distribution ID: `EKMIHMM18SZJ5`
- Distribution domain: `d1g412nguimmf1.cloudfront.net`
- Origin: Amazon S3
- Origin Access Control: Enabled
- Default Root Object: `index.html`
- Viewer Protocol Policy: Redirect HTTP to HTTPS
- Cache Policy: Managed-CachingOptimized
- Web Application Firewall: Not enabled

### 3. HTTPS Security

CloudFront provides HTTPS using its TLS certificate.

HTTP requests are redirected to HTTPS to ensure secure communication between visitors and the website.

### 4. DNS Verification

The CloudFront distribution hostname was tested using:

```powershell
nslookup d1g412nguimmf1.cloudfront.net
```

The hostname successfully resolved to IPv4 and IPv6 addresses.

**Custom Domain Status:** A separately registered custom domain and Route 53 hosted zone were not configured because this project used the default CloudFront domain.

### 5. CDN and Caching

CloudFront caching was verified using Chrome Developer Tools.

Observed response headers included:

- `X-Cache: Hit from cloudfront`
- `Via: CloudFront`
- `X-Amz-Cf-Pop`
- `Age`

These headers demonstrate that CloudFront is serving cached website content through its edge infrastructure.

## Deployment Steps

1. Created a responsive static website using HTML, CSS and JavaScript.
2. Created an Amazon S3 bucket in Mumbai.
3. Uploaded the website files to S3.
4. Created a CloudFront distribution.
5. Configured S3 Origin Access Control.
6. Set `index.html` as the default root object.
7. Configured HTTP-to-HTTPS redirection.
8. Waited for CloudFront deployment.
9. Verified the live website.
10. Tested HTTPS and DNS resolution.
11. Verified CloudFront CDN caching.

## Project Structure

```text
veda-task33-static-website/
│
├── index.html
├── style.css
├── script.js
├── README.md
├── ARCHITECTURE.md
└── screenshots/
```

## Learning Outcomes

- Understanding static website hosting on AWS.
- Deploying website files using Amazon S3.
- Configuring Amazon CloudFront.
- Understanding Origin Access Control.
- Implementing HTTPS redirection.
- Understanding DNS resolution.
- Verifying CDN caching through response headers.
- Testing responsive website design.

## Conclusion

Successfully deployed a responsive static portfolio website using Amazon S3 and Amazon CloudFront.

The deployment demonstrates secure S3 origin access, HTTPS delivery, DNS resolution and CDN caching.

