import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { updateLinkStrength, markNodeView } from '../../../redux/actions';
import { Link } from 'react-router-dom';
// import { Icon } from 'antd';
//custom components
import NodeCardHeader from './NodeCardHeader';
import NodeCardPreview from './NodeCardPreview';

class NodeCard extends Component {
  handleNodeClick = () => {
    const nodeUUID = this.props.node.uuid;
    if (this.props.activeNode) {
      const linkedNodeUUID = this.props.activeNode.uuid;
      // increment the linkStrength on the server
      this.props.updateLinkStrength(nodeUUID, linkedNodeUUID);
    }
  };

  // render card types
  renderCardTypes = (node) => {
    switch (node.type) {
      case 'text':
        return (
          <li className='nodelist-item'>
            <NodeCardHeader node={this.props.node} />
            <Link to={`/edit/text/${this.props.node.uuid}`} onClick={(e) => this.handleNodeClick()}>
              <NodeCardPreview node={this.props.node} />
            </Link>
          </li>
        );
      case 'image':
        return (
          <li className='nodelist-item'>
            <NodeCardHeader node={this.props.node} />
            <Link
              to={`/associations/${this.props.node.uuid}`}
              onClick={(e) => this.handleNodeClick()}
            >
              <NodeCardPreview node={this.props.node} />
            </Link>
          </li>
        );
      case 'url':
        return (
          <li className='nodelist-item'>
            <NodeCardHeader node={this.props.node} />
            <Link
              to={`/associations/${this.props.node.uuid}`}
              onClick={(e) => this.handleNodeClick()}
            >
              <NodeCardPreview node={this.props.node} />
            </Link>
          </li>
        );
      case 'file':
        return (
          <li className='nodelist-item'>
            <NodeCardHeader node={this.props.node} />
            <Link
              to={`/associations/${this.props.node.uuid}`}
              onClick={(e) => this.handleNodeClick()}
            >
              <NodeCardPreview node={this.props.node} />
            </Link>
          </li>
        );
      case 'audio':
        return (
          <li className='nodelist-item'>
            <NodeCardHeader node={this.props.node} />
            <Link
              to={`/associations/${this.props.node.uuid}`}
              onClick={(e) => this.handleNodeClick()}
            >
              <NodeCardPreview node={this.props.node} />
            </Link>
          </li>
        );
      case 'synthona':
        return (
          <li className='nodelist-item'>
            <NodeCardHeader node={this.props.node} />
            <Link
              to={`/associations/${this.props.node.uuid}`}
              onClick={(e) => this.handleNodeClick()}
            >
              <NodeCardPreview node={this.props.node} />
            </Link>
          </li>
        );
      case 'zip':
        return (
          <li className='nodelist-item'>
            <NodeCardHeader node={this.props.node} />
            <Link
              to={`/associations/${this.props.node.uuid}`}
              onClick={(e) => this.handleNodeClick()}
            >
              <NodeCardPreview node={this.props.node} />
            </Link>
          </li>
        );
      case 'collection':
        // create the collection grid
        var previewCount = 0;
        var collectionPreview = null;
        var preview = null;
        // check if the collection has a preview
        if (node.preview) {
          preview = JSON.parse(node.preview);
          previewCount = preview.length;
        }
        // create the different grid types
        switch (previewCount) {
          case 0:
            collectionPreview = (
              <li className='nodelist-item'>
                <NodeCardHeader node={this.props.node} />
                <Link
                  to={`/associations/${this.props.node.uuid}`}
                  onClick={(e) => this.handleNodeClick()}
                >
                  <NodeCardPreview node={this.props.node} />
                </Link>
              </li>
            );
            return collectionPreview;
          case 1:
            collectionPreview = (
              <li className='nodelist-item'>
                <NodeCardHeader node={this.props.node} />
                <Link
                  to={`/associations/${this.props.node.uuid}`}
                  onClick={(e) => this.handleNodeClick()}
                >
                  <NodeCardPreview node={this.props.node} />
                </Link>
              </li>
            );
            return collectionPreview;
          case 2:
            collectionPreview = (
              <li className='nodelist-item nodelist-item-collection'>
                <NodeCardHeader node={this.props.node} />
                <Link
                  to={`/associations/${this.props.node.uuid}`}
                  onClick={(e) => this.handleNodeClick()}
                >
                  <ul className='nodelist-collection-grid'>
                    <li className='nodelist-collection-grid-full-width'>
                      <NodeCardPreview node={preview[0]} />
                    </li>
                    <li className='nodelist-collection-grid-full-width'>
                      <NodeCardPreview node={preview[1]} />
                    </li>
                  </ul>
                </Link>
              </li>
            );
            return collectionPreview;
          case 3:
            collectionPreview = (
              <li className='nodelist-item nodelist-item-collection'>
                <NodeCardHeader node={this.props.node} />
                <Link
                  to={`/associations/${this.props.node.uuid}`}
                  onClick={(e) => this.handleNodeClick()}
                >
                  <ul className='nodelist-collection-grid'>
                    <li className='nodelist-collection-grid-full-width'>
                      <NodeCardPreview node={preview[0]} />
                    </li>
                    <li>
                      <NodeCardPreview node={preview[1]} />
                    </li>
                    <li>
                      <NodeCardPreview node={preview[2]} />
                    </li>
                    <li></li>
                  </ul>
                </Link>
              </li>
            );
            return collectionPreview;
          case 4:
            collectionPreview = (
              <li className='nodelist-item nodelist-item-collection'>
                <NodeCardHeader node={this.props.node} />
                <Link
                  to={`/associations/${this.props.node.uuid}`}
                  onClick={(e) => this.handleNodeClick()}
                >
                  <ul className='nodelist-collection-grid'>
                    <li>
                      <NodeCardPreview node={preview[0]} />
                    </li>
                    <li>
                      <NodeCardPreview node={preview[1]} />
                    </li>
                    <li>
                      <NodeCardPreview node={preview[2]} />
                    </li>
                    <li>
                      <NodeCardPreview node={preview[3]} />
                    </li>
                  </ul>
                </Link>
              </li>
            );
            return collectionPreview;
          default:
            return;
        }
      default:
        return;
    }
  };

  renderNodeCard = () => {
    if (this.props.node) {
      return <Fragment>{this.renderCardTypes(this.props.node)}</Fragment>;
    }
  };

  render() {
    return <div>{this.renderNodeCard()}</div>;
  }
}

export default connect(null, { updateLinkStrength, markNodeView })(NodeCard);
