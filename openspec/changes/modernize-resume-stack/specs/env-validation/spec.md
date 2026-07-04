## ADDED Requirements

### Requirement: Required environment variables are declared centrally
The system SHALL declare all required environment variables in a single validation module.

#### Scenario: Developer inspects environment configuration
- **WHEN** a developer opens the environment validation module
- **THEN** they see every required variable name, whether it is required in production, and a human-readable description

### Requirement: Missing required variables fail fast in production
The system SHALL throw a clear error at build or startup time when a required production environment variable is missing.

#### Scenario: Production build with missing variable
- **WHEN** `NODE_ENV` is `production` and a required variable is missing
- **THEN** the process exits with an error naming the missing variable

### Requirement: Missing optional variables do not block development
The system SHALL allow development builds to run when optional variables (such as S3 credentials) are missing.

#### Scenario: Development server starts without S3 credentials
- **WHEN** `NODE_ENV` is not `production` and S3 credentials are missing
- **THEN** the development server starts successfully using local fallback data

### Requirement: Typo in variable name is corrected
The system SHALL use the corrected environment variable name `CONFIG_KEY` instead of the misspelled `CONFGI_KEY`.

#### Scenario: Build reads config key
- **WHEN** the build reads the S3 object key
- **THEN** it reads `process.env.CONFIG_KEY`
