import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Typography, Alert } from 'antd';
import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import styles from './index.less';

const CodePreview: React.FC<{}> = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

export default () => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <PageHeaderWrapper>
      <Card>
        <Alert
          message="Email 通知能力现已发布，点击左侧 · 📧电子邮件 · 按钮即可体验"
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 24,
          }}
        />
        <Typography.Text strong>
          <a target="_blank" rel="noopener noreferrer">
            AccessKey
          </a>
        </Typography.Text>
        <CodePreview> npm run ui</CodePreview>
        <Typography.Text
          strong
          style={{
            marginBottom: 12,
          }}
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
          >
            SecretKey
        </a>
        </Typography.Text>
        <CodePreview> npm run fetch:blocks</CodePreview>
      </Card>
      <p
        style={{
          textAlign: 'center',
          marginTop: 24,
        }}
      >
        Want to add more pages? Please refer to{' '}
        <a href="https://pro.ant.design/docs/block-cn" target="_blank" rel="noopener noreferrer">
          use block
      </a>
      。
    </p>
    </PageHeaderWrapper>
  );
};
