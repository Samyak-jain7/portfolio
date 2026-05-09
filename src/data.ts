export const stats = [
  { value: '5+', label: 'Years engineering production systems' },
  { value: '150K+', label: 'Peak requests/sec handled' },
  { value: '98%', label: 'Cache hit rate achieved' },
  { value: '6+', label: 'Production CDC pipelines' },
];

export const experiences = [
  {
    company: 'Observe.AI',
    role: 'Software Engineer II',
    period: 'Aug 2025 — Nov 2025',
    summary:
      'Architected DataPulse, an enterprise CDC platform moving MongoDB data into Snowflake across production pipelines.',
    impact: [
      'Processed millions of documents daily across 6+ production CDC pipelines',
      'Deployed a 3-replica Kafka Connect cluster on Kubernetes with Strimzi',
      'Reduced network overhead by 40% using ZSTD compression, batching, and 512MB buffers',
      'Built Python automation for Debezium snapshots and self-service backfills',
    ],
    stack: ['Debezium', 'Kafka Connect', 'Snowflake', 'MongoDB', 'Kubernetes', 'Python'],
  },
  {
    company: 'Fivetran',
    role: 'Software Engineer II',
    period: 'Nov 2024 — Mar 2025',
    summary:
      'Worked on analytical data pipelines and performance improvements for large-scale ingestion workloads.',
    impact: [
      'Migrated clustering strategy from Z-Order to Liquid Clustering',
      'Improved analytical query performance by 20%',
      'Built Python data quality checks and automated ingestion tests',
    ],
    stack: ['Java', 'Python', 'Snowflake', 'Data Pipelines'],
  },
  {
    company: 'Allen Digital',
    role: 'Software Engineer II',
    period: 'Jul 2023 — Nov 2024',
    summary:
      'Built high-throughput backend systems powering taxonomy, content hierarchy, and video chaptering workflows.',
    impact: [
      'Architected Taxonomy Service using versioned hierarchical MongoDB models',
      'Served 150K+ requests/sec at peak with 98% cache hit rate',
      'Reduced average response time by 70% from 120ms to 36ms',
      'Built video chaptering APIs and validation workflows, reducing upload errors by 80%',
    ],
    stack: ['Golang', 'MongoDB', 'Redis', 'AWS', 'REST APIs'],
  },
  {
    company: 'Amazon',
    role: 'Software Development Engineer',
    period: 'Jul 2020 — Mar 2023',
    summary:
      'Shipped backend reliability, automation, and performance improvements across production services.',
    impact: [
      'Automated deployment and monitoring tasks, saving 5+ hours/week',
      'Reduced page latency by ~10ms with lazy-loading validated via A/B testing',
      'Built CPU smoothing mechanism reducing spikes from 75% to 60%',
      'Led migration of 20+ legacy HTTP headers to improve modularity',
    ],
    stack: ['Python', 'Boto3', 'Java', 'AWS Lambda', 'S3', 'EC2'],
  },
];

export const projects = [
  {
    title: 'Document Intelligence',
    signal: 'Applied AI contract use-case',
    description:
      'RAG-based document platform for PDF upload, text extraction, semantic search, and AI-powered document chat — relevant for legal, finance, HR, support, and internal knowledge-base automation contracts.',
    tech: ['Python', 'RAG', 'Vector Search', 'PDF Processing'],
    link: 'https://github.com/Samyak-jain7/document-intelligence',
  },
  {
    title: 'Multi-Agent Orchestrator',
    signal: 'AI automation contract use-case',
    description:
      'Visual platform to configure and run multiple AI agents for complex tasks — relevant for workflow automation, internal tools, ops copilots, and agentic business process prototypes.',
    tech: ['TypeScript', 'React', 'AI Agents', 'Workflows'],
    link: 'https://github.com/Samyak-jain7/multi-agent-orchestrator',
  },
];

export const skills = [
  { group: 'Languages', items: ['Java', 'Python', 'Golang', 'C++'] },
  { group: 'Backend', items: ['Spring Boot', 'Django', 'Flask', 'REST APIs', 'Microservices'] },
  { group: 'Data Infra', items: ['Kafka', 'Kafka Connect', 'Debezium', 'Snowflake', 'Streaming Pipelines'] },
  { group: 'Databases', items: ['MongoDB', 'PostgreSQL', 'DynamoDB', 'Redis'] },
  { group: 'Cloud / DevOps', items: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'CI/CD'] },
  { group: 'Observability', items: ['Prometheus', 'Grafana', 'VictoriaMetrics', 'DataDog'] },
];
