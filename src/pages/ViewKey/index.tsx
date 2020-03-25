import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Typography, Alert } from 'antd';
import React from 'react';
import { connect } from 'dva';
import { Redirect } from 'umi';
import styles from './index.less';
import Cookies from 'js-cookie'

interface KeyPair {
  AccessKey: string,
  SecretKey: string,
}

const KeyView = ({ keyPair }: { keyPair: KeyPair }) => {
  return (
    <div>
      <Typography.Text strong>
        <a target="_blank" rel="noopener noreferrer">
          AccessKey
          </a>
      </Typography.Text>
      <CodePreview>{keyPair.AccessKey}</CodePreview>
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
      <CodePreview>{keyPair.SecretKey}</CodePreview>
    </div>
  );
};

const CodePreview: React.FC<{}> = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

const isLogin = Cookies.get('token');


function key(kayPair: any) {
  if (!isLogin && window.location.pathname !== '/user/login') {
    return <Redirect to={`/user/login`} />;
  }

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
        <KeyView keyPair={kayPair} />
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

function mapStateToProps(state: any) {
  return state.key;
}

export default connect(mapStateToProps)(key);