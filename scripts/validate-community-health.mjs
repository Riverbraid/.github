import fs from "node:fs";

const requiredFiles = [
  "README.md",
  "GOVERNANCE.md",
  "MAINTAINERS.md",
  "CONTRIBUTING.md",
  "INBOUND_CONTRIBUTION_RIGHTS.md",
  "FORKING.md",
  "RELEASE_AND_COMPATIBILITY.md",
  "SUPPORTED_VERSIONS.md",
  "SECURITY.md",
  "SUPPORT.md",
  "CODE_OF_CONDUCT.md",
  "PULL_REQUEST_TEMPLATE.md",
  "USER_PROFILE_README_CANDIDATE.md",
  "profile/README.md"
];

function fail(code, details = {}) {
  console.error(JSON.stringify({ status: "FAILED", code, ...details }, null, 2));
  process.exit(1);
}

function read(path) {
  if (!fs.existsSync(path)) {
    fail("REQUIRED_FILE_MISSING", { path });
  }

  const content = fs.readFileSync(path, "utf8").replace(/^\uFEFF/, "");
  if (content.trim().length === 0) {
    fail("REQUIRED_FILE_EMPTY", { path });
  }
  return content;
}

function requireText(path, content, expected) {
  if (!content.includes(expected)) {
    fail("REQUIRED_TEXT_MISSING", { path, expected });
  }
}

function forbidText(path, content, forbidden) {
  if (content.toLowerCase().includes(forbidden.toLowerCase())) {
    fail("FORBIDDEN_TEXT_PRESENT", { path, forbidden });
  }
}

const files = new Map(requiredFiles.map((path) => [path, read(path)]));

const rootReadme = files.get("README.md");
requireText("README.md", rootReadme, "GitHub user account");
requireText("README.md", rootReadme, "Riverbraid/Riverbraid");
requireText("README.md", rootReadme, "Riverbraid-Evaluation-Kit");
requireText("README.md", rootReadme, "account-wide template inheritance");
forbidText("README.md", rootReadme, "public proof path");

const profileCandidate = files.get("profile/README.md");
requireText("profile/README.md", profileCandidate, "organization-profile candidate");
requireText("profile/README.md", profileCandidate, "user account");

const governance = files.get("GOVERNANCE.md");
requireText("GOVERNANCE.md", governance, "Founder-led, evidence-constrained, forkable");
requireText("GOVERNANCE.md", governance, "does not silently adopt");
requireText("GOVERNANCE.md", governance, "No decision may be upgraded merely to satisfy a schedule");

const maintainers = files.get("MAINTAINERS.md");
requireText("MAINTAINERS.md", maintainers, "current public surface is founder-maintained");
requireText("MAINTAINERS.md", maintainers, "CODEOWNERS");
requireText("MAINTAINERS.md", maintainers, "permission is not equivalent to governing authority");

const contributing = files.get("CONTRIBUTING.md");
for (const reference of [
  "INBOUND_CONTRIBUTION_RIGHTS.md",
  "PULL_REQUEST_TEMPLATE.md",
  "SECURITY.md",
  "SUPPORTED_VERSIONS.md",
  "RELEASE_AND_COMPATIBILITY.md"
]) {
  requireText("CONTRIBUTING.md", contributing, reference);
}
requireText("CONTRIBUTING.md", contributing, "No adoption or gate advancement");

const rights = files.get("INBOUND_CONTRIBUTION_RIGHTS.md");
requireText("INBOUND_CONTRIBUTION_RIGHTS.md", rights, "No separate contributor license agreement");
requireText("INBOUND_CONTRIBUTION_RIGHTS.md", rights, "No Developer Certificate of Origin sign-off");
requireText("INBOUND_CONTRIBUTION_RIGHTS.md", rights, "does not automatically");

const security = files.get("SECURITY.md");
requireText("SECURITY.md", security, "Do **not** publish");
requireText("SECURITY.md", security, "Report a vulnerability");
requireText("SECURITY.md", security, "Private security contact requested");
requireText("SECURITY.md", security, "does not prove that the private route is enabled everywhere");

const pullRequestTemplate = files.get("PULL_REQUEST_TEMPLATE.md");
for (const expected of [
  "Exact subject and scope",
  "Authority and disposition",
  "Evidence and validation",
  "Claim effect",
  "Security, privacy, and disclosure",
  "Contributor rights",
  "does not silently adopt"
]) {
  requireText("PULL_REQUEST_TEMPLATE.md", pullRequestTemplate, expected);
}

const versions = files.get("SUPPORTED_VERSIONS.md");
requireText("SUPPORTED_VERSIONS.md", versions, "Account-wide support window:** Not declared");
requireText("SUPPORTED_VERSIONS.md", versions, "Silence must not be converted into `SUPPORTED`");

const releasePolicy = files.get("RELEASE_AND_COMPATIBILITY.md");
requireText("RELEASE_AND_COMPATIBILITY.md", releasePolicy, "A tag, GitHub release, package publication");
requireText("RELEASE_AND_COMPATIBILITY.md", releasePolicy, "does not by itself establish");
requireText("RELEASE_AND_COMPATIBILITY.md", releasePolicy, "COMPARISON_NOT_VALID");

for (const [path, content] of files) {
  forbidText(path, content, "full constellation operational: yes");
  forbidText(path, content, "certified by Riverbraid");
  forbidText(path, content, "production ready and secure");
}

console.log(JSON.stringify({
  status: "COMMUNITY_HEALTH_INVARIANTS_PASS",
  required_file_count: requiredFiles.length,
  account_type: "GITHUB_USER_ACCOUNT",
  personal_profile_repository_required: "Riverbraid/Riverbraid",
  f0_f4_effect: "NONE"
}, null, 2));
