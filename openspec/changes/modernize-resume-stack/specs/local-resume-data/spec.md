## ADDED Requirements

### Requirement: Local fallback resume data exists
The system SHALL provide a committed local resume data file that matches the S3 YAML schema.

#### Scenario: Local file is present
- **WHEN** the project is cloned
- **THEN** a `data/resume.yml` file exists with valid resume content

### Requirement: Development builds use local fallback when S3 is unavailable
The system SHALL use the local resume data file when S3 credentials or the remote object are unavailable in development.

#### Scenario: Missing AWS credentials in development
- **WHEN** `NODE_ENV` is not `production` and `AWS_ACCESS_KEY_ID` is missing
- **THEN** `getStaticProps` reads `data/resume.yml` instead of making an S3 request

#### Scenario: S3 request fails in development
- **WHEN** `NODE_ENV` is not `production` and the S3 request throws
- **THEN** `getStaticProps` catches the error and reads `data/resume.yml`

### Requirement: Production builds require S3 configuration
The system SHALL fail the build in production if S3 configuration is missing or invalid.

#### Scenario: Missing S3 credentials in production
- **WHEN** `NODE_ENV` is `production` and a required S3 environment variable is missing
- **THEN** the build fails with a clear error message

### Requirement: S3 remains the primary data source when configured
The system SHALL fetch resume data from S3 when credentials and configuration are valid.

#### Scenario: Valid S3 configuration
- **WHEN** all required S3 environment variables are present
- **THEN** `getStaticProps` uses the S3 object as the resume data source
