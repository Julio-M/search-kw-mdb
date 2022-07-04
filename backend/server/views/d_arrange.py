import numbers
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from string import punctuation
import numpy as np
import pandas as pd
import re

from ..database import (
    languages_collection,
    frameworks_collection
)


punctuation = list(punctuation)
stopwords = stopwords.words('english')
extra = ['’', ""''"","'s","--",'–']

async def words(data,type):
  tokens = word_tokenize(data)

  cleaned_tokens = [token for token in tokens if token.lower() not in stopwords and not token.isdigit()

                    and token not in punctuation and token not in extra]

  
  count = pd.value_counts(np.array(cleaned_tokens))

  d = count.to_dict()

  new_list = []
  for key, value in d.items():
   if key[0].isdigit():
    pass
   else:
    if type == 'All':
        new_list.append({'word':key, 'count':value})
    elif type=='Languages':
      # x = {"language" : {"$regex" : f".*{key}.*"}}
      x={"language":key}
      p_l= languages_collection.find(x).collation({ "locale": 'en', "strength": 2 })
      my_list = await p_l.to_list(length=1)
      if len(my_list)>0:
        new_list.append({'word':key, 'count':value, 'notes':f"{my_list[0]['source']}", "language":my_list[0]['language']})
    elif type=='Frameworks':
      # x = {"name" : {"$regex" : f".*{key}.*"}}
      x={"name":key}
      # p_l= await frameworks_collection.find_one(x)
      p_l= frameworks_collection.find(x).collation({ "locale": 'en', "strength": 2 })
      my_list = await p_l.to_list(length=1)
      if len(my_list)>0:
        new_list.append({'word':key, 'count':value, 'language':f"{my_list[0]['name']}", "notes":my_list[0]['type']})
  return new_list

  # all_words = word_tokenize(data)

  # print(all_words)

  # count.to_csv('count.csv', sep=',', index=True)