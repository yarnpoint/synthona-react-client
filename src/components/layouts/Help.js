import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Icon } from 'antd';
// custom code
import './css/Help.less';
import MainSider from '../elements/MainSider';
import IOBar from '../elements/IOBar';

const { Content } = Layout;

class Help extends Component {
  componentDidMount() {
    document.title = 'Help';
    // temporary fix to undo whatever is setting overflow hidden on-login
    document.body.style.removeProperty('overflow');
  }

  renderMainSider = () => {
    if (this.props.mainSider) {
      return <MainSider />;
    }
  };

  render() {
    return (
      <Layout className='page-layout'>
        <Layout>
          {this.renderMainSider()}
          <Content
            style={{
              minHeight: '100vh',
              backgroundColor: '#e0dcc7',
              textAlign: 'left',
              paddingBottom: '3rem',
            }}
          >
            <div style={{ position: 'fixed', width: '100%' }}>
              <IOBar />
            </div>
            <div className='help-container' style={{ padding: '5.5rem 17rem 1rem' }}>
              <h2 style={{ fontSize: '2rem' }}>Help Page</h2>
              <p>
                Hello there! Welcome to the help page! This is where you can get the help you need,
                so you can rest easy. Allow me to explain exactly what is going on here. First
                things first, you are on the help page! It's a nice place to hang out. There's all
                kinds of wonderful things you learn while you are here.
              </p>
              <h2>Keyboard Shortcuts</h2>
              <p>
                For now the main keyboard shortcuts, which currently only work in the core app (not
                in tabs you open in your web browser) are as follows:
              </p>
              <ul>
                <li>CMD/CTRL+G - jump to the graph browser</li>
                <li>CMD/CTRL+H - jump to the home page</li>
                <li>CMD/CTRL+OPTION/ALT+1 - save the current node to the quick menu</li>
                <li>CMD/CTRL+1 - jump to #1 on the quick menu if you have saved something there</li>
                <li>
                  Quick-Menu - the quick menu will also work with the number keys 1-9, and with 0
                </li>
              </ul>
              <h2>What are do all these icons mean?</h2>
              <p>
                If you hover over most icons for a couple of seconds a tooltip should show up which
                explains what the button does, but I've written out a guide here as well so you can
                be confident of what your clicks will accomplish.
              </p>
              <h3>
                Associations <Icon type={'branches'} theme='outlined' />
              </h3>
              <p>
                This is the icon you'll see whenever associations are in-play. It mostly appears on
                node cards in the node explorer. Clicking it will typically bring up a menu which
                lists the associations for a given node and allows you to add new ones.
              </p>
              <Icon type={'branches'} theme='outlined' className='help-icon' />
              <h3>
                Light Bulb <Icon type={'bulb'} theme='outlined' />
              </h3>
              <p>
                The light bulb is the universal symbol for having a good idea, which is why it was
                chosen as the "good idea" button. Whenever you click the light bulb icon the node in
                question will be pushed to the top of the home page. You can click this button as
                much as you want and nothing bad will happen!
              </p>
              <Icon type={'bulb'} theme='outlined' className='help-icon' />
              <h3>
                Open In Browser <Icon type={'global'} theme='outlined' />
              </h3>
              <p>
                This button will open the active node in your default web browser! This is useful
                for various reasons, like if you want to run the application in your browser as a
                tab, if you wanted to save images or files into your downloads folder, or as a way
                to manage additional synthona tabs.
              </p>
              <Icon type={'global'} theme='outlined' className='help-icon' />
              <h3>
                Unpack Synthona Package <Icon type={'appstore'} theme='outlined' />
              </h3>
              <p>
                If you have created or imported a Synthona package into your Synthona instance, you
                will see this icon on the package page. Clicking it will "unpack" the package,
                importing all the nodes and associations it contains into your profile. Once you
                click this, it will be replaced by an "undo" <Icon type={'undo'} theme='outlined' />{' '}
                icon which will allow you to "repack" the package. The undo option will delete all
                the nodes which unpacking created, which makes unpacking a reversible operation.
              </p>
              <Icon type={'appstore'} theme='outlined' className='help-icon' />
              <h3>
                Visible <Icon type={'eye'} theme='outlined' />
              </h3>
              <p>
                Clicking this icon allows you to toggle whether a node is visible on the homepage or
                not. Nodes which are hidden from the homepage will only be accessible through their
                associations. This allows you to hide content behind other content.
              </p>
              <Icon type={'eye'} theme='outlined' className='help-icon' />
              <h3>
                Searchable <Icon type={'search'} theme='outlined' />
              </h3>
              <p>
                Clicking this icon allows you to toggle whether a node will appear in a search or
                not.
              </p>
              <Icon type={'search'} theme='outlined' className='help-icon' />
              <h3>
                Delete <Icon type={'delete'} theme='outlined' />
              </h3>
              <p>
                This is the garbage can, it lets you put delete nodes from the system! Not bad,
                pretty good!
              </p>
              <Icon type={'delete'} theme='outlined' className='help-icon' />
              <h3>
                Synthona Package <Icon type={'paper-clip'} theme='outlined' />
              </h3>
              <p>
                Synthona packages allow you to share nodes and their associations between computers
                as <i>.synth</i> files, which can be re-imported by anyone into any synthona
                instance on any computer. These files are represented within synthona by this icon.
                If you click this icon, it will generate an export package based on the node you
                clicked it from. Synthona packages contain the node in question, all the nodes
                associated with it, and their associations with each other.
              </p>
              <Icon type={'paper-clip'} theme='outlined' className='help-icon' />
              <h3>
                Graph Icon <Icon type={'deployment-unit'} theme='outlined' />
              </h3>
              <p>This icon will take you to the graph browser from that node.</p>
              <Icon type={'deployment-unit'} theme='outlined' className='help-icon' />
              <h2>What is Synthona?</h2>
              <p>
                Synthona allows you to create, explore, and share networks made out of content! That
                might sound confusing but it's really not so bad once you get familiar. It's like
                learning to read, once you understand Synthona interactions with the interface
                become second nature.
                <b>
                  The good news is that you cannot mess anything up, Synthona will not make any
                  changes to any content outside itself.
                </b>
                Even if you upload a file, Synthona will only make a copy, the original file will
                still exist on your computer. The worst thing you can do is delete something from
                Synthona, but that action is clearly marked by a garbage can.
              </p>
              <h2>What should I do first?</h2>
              <p>
                You can start by uploading or creating some content, you do this by clicking the
                blue button at the top of the page. This will transform it into a plus sign and put
                the IO bar into <i>create-mode</i>.
              </p>
              <p>
                From there, to the left of the input field there is a dropdown menu which contains
                some content types. You can select one of those which will prepare the IO bar to
                create that content. For most content types you can type a name for the node you're
                about to create into the input field and it will automatically be added to the
                generated node. The exception is urls which don't allow a name on creation since you
                have to paste the url into that space instead. To finish creating a node, hit enter
                in the input bar or click the button to the right side of the text input. That's it!
                Now it's in the system.
              </p>
              <h2>What are nodes and associations?</h2>
              <p>
                Synthona is premised on the idea that all content is a <i>node</i> which can be
                associated, connected, related, to any other piece of content. A connection between
                any two pieces of content is called an <i>association</i>. If you understand these
                two ideas, you understand Synthona! That's all there is to it, the rest is just
                building on these two assumptions.
              </p>
              <h2>How do I edit the name of a node?</h2>
              <p>If you double click the title it should turn into an editable text field.</p>
              <h2>The Graph Browser</h2>
              <p>
                The graph browser is an alternate way of viewing all your data! You can get there
                clicking the "graph" icon <Icon type={'deployment-unit'} theme='outlined' /> on any
                node or clicking the "graph" option from the options menu. If you click it from a
                specific node, you'll see the associations for that node and their relationships to
                each other displayed. Accessing it from the options menu instead, or via ctrl+G
                (cmd+G on mac) will instead show a list of the most recently accessed nodes!
              </p>
              <h2>Is my data being backed up anywhere?</h2>
              <p>
                Only in the app database which is stored on your computer. If you want to save a
                copy of your data elsewhere, you can generate manual backups as often as you want
                through the export functionality. If you go to the options menu there is a button
                labeled "export all user data". This will put all your nodes and associations into a
                .synth file which will be added to your homepage. You can then click through to
                download that file. That .synth file containing all your data can be imported into
                an updated version of the app, onto a version on another computer, or stored as a
                backup. Also, although it's not really designed for this, you could break the .synth
                file open to get at the files themselves. If you need to get at the specific files
                in there, you can change the file extension from .synth to .zip which should allow
                your computer to de-compress the archive.
              </p>
              <h2>How do I bring data from an older version into the latest version of the app?</h2>
              <p>
                As mentioned in the previous question, you can go to the options menu on the older
                version and click the "export all user data" option to get a .synth file containing
                all your user data. You can then import that into the latest version you've
                downloaded by unpacking it from within the new version. Once you have imported your
                data into the new version, you can safely delete the old version of the app from
                your computer.
              </p>
              <h2>What if I have an idea for a change to the app?</h2>
              <p>
                Synthona is an open-source project and is licensed under GPLv3 which means if you
                want to take things into your own hands you're free to fork the project, but I am
                also more than willing to hear out your concerns and try to implement changes myself
                if I can! The goal here is to make something which benefits as many people as
                possible. If you're interested in taking a look at the code feel free to check out
                the project on{' '}
                <a href='https://www.github.com/synthona' target='_blank' rel='noopener noreferrer'>
                  github
                </a>
                !
              </p>
              <h2>I want to financially support development, what should I do?</h2>
              <p>
                There is a{' '}
                <a
                  href='https://www.patreon.com/synthona'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  patreon
                </a>{' '}
                you can contribute to and I may add more donation options in the future. Anything
                helps, I spent quite a bit of time developing this idea and am currently between
                jobs. I have a lot of ideas for improvements to this application including things
                like P2P features, automatic updates, theme support, plugin support, a lot of other
                node types, maps, web-features, analytics, social features, 3D features, and so much
                more, but I can't afford to work on this full-time without enough funding to make
                rent. This project was originally designed to function as a distrubuted p2p social
                network and that is not really off the table, but there is still a lot of work to be
                done before that is possible and funding would allow me to work on it.
              </p>
              <h2>I have a bug report, feature request, or other inquiry?</h2>
              <p>
                Please send an email to{' '}
                <a
                  href='mailto:synthona@gmail.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  type='email'
                >
                  synthona@gmail.com
                </a>{' '}
                or reach out on{' '}
                <a
                  href='https://www.twitter.com/synthona'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  twitter
                </a>{' '}
                and we will get things sorted out as soon as possible!
              </p>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    mainSider: state.components.componentList['mainSider'],
  };
};

export default connect(mapStateToProps)(Help);
