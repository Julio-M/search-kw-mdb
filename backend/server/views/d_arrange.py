import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
import string
from string import punctuation
import numpy as np
import pandas as pd

from server.database import (
    languages_collection
)


punctuation = list(punctuation)
stopwords = stopwords.words('english')

async def words(data,type):
  tokens = word_tokenize(data)

  cleaned_tokens = [token for token in tokens if token.lower() not in stopwords

                    and token not in punctuation]
  
  count = pd.value_counts(np.array(cleaned_tokens))

  d = count.to_dict()

  new_list = []
  for key, value in d.items():
   if type == 'All':
      new_list.append({'word':key, 'count':value})
   elif type=='Languages':
    x = {"language" : {"$regex" : f".*{key}.*"}}
    p_l= await languages_collection.find_one(x)
    if p_l:
      new_list.append({'word':key, 'count':value})
  return new_list

  # all_words = word_tokenize(data)

  # print(all_words)

  # count.to_csv('count.csv', sep=',', index=True)