/* eslint-disable linebreak-style */
import React from 'react';

import { Repository } from '../../store/ducks/repositories/types';

interface OwnItemProps {
  repository: Repository;
}

const RepositoryItem = ({ repository }: OwnItemProps) => <li>{repository.name}</li>;

export default RepositoryItem;
